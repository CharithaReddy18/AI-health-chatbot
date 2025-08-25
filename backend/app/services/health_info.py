health_info = {
    "Common Cold": "The common cold is a viral infection of your nose and throat...",
    "Influenza (Flu)": "The flu is a contagious respiratory illness...",
    "Diabetes": "Diabetes is a chronic health condition...",
    "Hypertension": "Hypertension is high blood pressure...",
    "Allergies": "Allergies are caused by hypersensitivity...",
    "Asthma": "Asthma is a long-term disease of the lungs..."
}

def get_health_info(topic: str = None):
    if topic:
        return {topic: health_info.get(topic, "Topic not found")}
    return health_info
