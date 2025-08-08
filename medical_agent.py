from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
from langchain import hub
load_dotenv()

def chatbot(query):
# Load the Data from DataBase
    embeddings =  HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    knowledge_store = FAISS.load_local("Medical_DataBase",embeddings,allow_dangerous_deserialization=True)

    # Retriver to retrieve medical data
    retriever = knowledge_store.as_retriever()

    #LLM Model
    llm = ChatGroq(model ='Gemma2-9b-It')

    #Prompt
    prompt = hub.pull('rlm/rag-prompt') 

    # Conversational rag chain
    parallel_chain =  RunnableParallel({'context':retriever,'question': RunnablePassthrough()})
    chain = parallel_chain|prompt| llm | StrOutputParser()
    response = chain.invoke(query)

    return response



