# Roadmap for AI Health Assistant

This document outlines the future development plan for the AI Health Assistant project.

## Phase 1: Core Functionality Enhancements

-   [x] Refactor the symptom checker for scalability.
-   [ ] Expand the `symptom_flows` with more conditions (e.g., skin rash, stomach pain).
-   [ ] Implement more robust NLP for keyword extraction to trigger the symptom flows (e.g., using spaCy or NLTK for entity recognition).
-   [ ] Improve the rule-based responses in `healthcare_chatbot` to be more comprehensive.

## Phase 2: Advanced Features

-   [ ] Integrate with a medical knowledge base (e.g., an API like Mayo Clinic or a medical ontology) to provide more accurate and detailed health information.
-   [ ] Implement user profiles to store chat history and basic health information securely.
-   [ ] Add a feature for medication reminders, allowing users to set up notifications.

## Phase 3: Model and Deployment

-   [ ] Fine-tune a larger language model (e.g., a member of the GPT family or a specialized medical model) on a curated dataset of medical conversations to improve the chatbot's conversational abilities.
-   [ ] Deploy the application to a cloud platform (e.g., Heroku, AWS, or Google Cloud) for public access.
-   [ ] Implement a feedback mechanism for users to rate the chatbot's responses, providing data for further model improvement.
