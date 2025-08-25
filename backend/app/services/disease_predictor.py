import os
import pandas as pd
from collections import Counter
from sklearn.preprocessing import LabelEncoder
from sklearn import tree, svm
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")

# Load datasets
dis_sym_data = pd.read_csv(os.path.join(DATA_DIR, "Original_Dataset.csv"))
doc_data = pd.read_csv(os.path.join(DATA_DIR, "Doctor_Versus_Disease.csv"), encoding='latin1', names=['Disease', 'Specialist'])
des_data = pd.read_csv(os.path.join(DATA_DIR, "Disease_Description.csv"))

# Prepare data
columns_to_check = [col for col in dis_sym_data.columns if col != 'Disease']
symptoms_list = list(set(dis_sym_data.iloc[:, 1:].values.flatten()))
symptoms_list = [s for s in symptoms_list if pd.notna(s)]

for symptom in symptoms_list:
    dis_sym_data[symptom] = dis_sym_data.iloc[:, 1:].apply(lambda row: int(symptom in row.values), axis=1)

dis_sym_data_v1 = dis_sym_data.drop(columns=columns_to_check)
dis_sym_data_v1 = dis_sym_data_v1.loc[:, dis_sym_data_v1.columns.notna()]
dis_sym_data_v1.columns = dis_sym_data_v1.columns.str.strip()

# Encode labels
le = LabelEncoder()
dis_sym_data_v1['Disease'] = le.fit_transform(dis_sym_data_v1['Disease'])
X = dis_sym_data_v1.drop(columns="Disease")
y = dis_sym_data_v1['Disease']

# Train models
algorithms = {
    'Logistic Regression': LogisticRegression(),
    'Decision Tree': tree.DecisionTreeClassifier(),
    'Random Forest': RandomForestClassifier(),
    'SVM': svm.SVC(probability=True),
    'NaiveBayes': GaussianNB(),
    'K-Nearest Neighbors': KNeighborsClassifier(),
}
for model in algorithms.values():
    model.fit(X, y)

def predict_diseases(symptoms: list[str], threshold: float = 20.0):
    if not symptoms:
        return []

    test_data = {col: 1 if col in symptoms else 0 for col in X.columns}
    test_df = pd.DataFrame(test_data, index=[0])

    predicted = []
    for model in algorithms.values():
        pred = model.predict(test_df)
        disease = le.inverse_transform(pred)[0]
        predicted.append(disease)

    disease_counts = Counter(predicted)
    percentage_per_disease = {
        disease: (count / len(algorithms)) * 100 for disease, count in disease_counts.items()
    }

    # Apply threshold filter
    percentage_per_disease = {d: p for d, p in percentage_per_disease.items() if p >= threshold}

    if not percentage_per_disease:
        return []

    result_df = pd.DataFrame({
        "Disease": list(percentage_per_disease.keys()),
        "Chances": list(percentage_per_disease.values())
    })
    result_df = result_df.merge(doc_data, on='Disease', how='left')
    result_df = result_df.merge(des_data, on='Disease', how='left')

    return result_df.to_dict(orient="records")
