symptom_flows = {
    "headache": {
        "questions": [
            ("headache_severity", "On a scale of 1-10, how severe is your headache?"),
            ("headache_location", "Where is the headache located? (forehead, temples, etc.)")
        ],
        "summary": "You reported a headache with severity {headache_severity} at {headache_location}. Please consult a doctor."
    },
    "fever": {
        "questions": [
            ("fever_duration", "How many days have you had the fever?"),
            ("fever_other_symptoms", "Other symptoms (cough, sore throat)?")
        ],
        "summary": "You reported a fever for {fever_duration} days with other symptoms: {fever_other_symptoms}. Please consult a doctor."
    }
}

# simplified stateful checker (can be extended with DB/session)
def symptom_checker(user_input: str, session: dict):
    user_input = user_input.lower()
    flow = session.get('symptom_flow')
    question_index = session.get('question_index', 0)
    symptoms_data = session.get('symptoms_data', {})

    if flow is None:
        for keyword, data in symptom_flows.items():
            if keyword in user_input:
                session['symptom_flow'] = keyword
                session['question_index'] = 0
                session['symptoms_data'] = {}
                question_key, question_text = data["questions"][0]
                session['current_question_key'] = question_key
                return question_text, session
        return None, session

    current_flow_data = symptom_flows[flow]
    last_question_key = session.get('current_question_key')

    if last_question_key:
        symptoms_data[last_question_key] = user_input

    if question_index < len(current_flow_data["questions"]):
        question_key, question_text = current_flow_data["questions"][question_index]
        session['current_question_key'] = question_key
        session['question_index'] += 1
        session['symptoms_data'] = symptoms_data
        return question_text, session
    else:
        summary = current_flow_data["summary"].format(**symptoms_data)
        session.clear()
        return summary, session
