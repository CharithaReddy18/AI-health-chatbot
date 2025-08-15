from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
from langchain import hub
import os

load_dotenv()

def chatbot(query):
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    knowledge_store = FAISS.load_local("Medical_DataBase", embeddings, allow_dangerous_deserialization=True)
    retriever = knowledge_store.as_retriever()
    try:
        api_key = os.getenv("GROQ_API_KEY")
        if api_key:
            from langchain_groq import ChatGroq
            llm = ChatGroq(model='Gemma2-9b-It', api_key=api_key)
        else:
            raise ValueError("No GROQ_API_KEY found, switching to offline mode.")
    except Exception as e:
        print(f"[Offline Mode] {e}")
        from langchain_community.llms import HuggingFacePipeline
        from transformers import pipeline
        generator = pipeline("text-generation", model="distilgpt2")
        llm = HuggingFacePipeline(pipeline=generator)
    prompt = hub.pull('rlm/rag-prompt')
    parallel_chain = RunnableParallel({'context': retriever, 'question': RunnablePassthrough()})
    chain = parallel_chain | prompt | llm | StrOutputParser()
    response = chain.invoke(query)

    return response




