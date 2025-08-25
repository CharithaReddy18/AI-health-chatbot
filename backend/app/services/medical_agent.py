from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from langchain import hub
from app.config import get_settings

settings = get_settings()

def chatbot(query: str) -> str:
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    knowledge_store = FAISS.load_local(
        "app/Medical_DataBase",
        embeddings,
        allow_dangerous_deserialization=True
    )
    retriever = knowledge_store.as_retriever()

    # ✅ pass API key here
    llm = ChatGroq(model="Gemma2-9b-It", api_key=settings.GROQ_API_KEY)

    prompt = hub.pull("rlm/rag-prompt")

    parallel_chain = RunnableParallel({
        "context": retriever,
        "question": RunnablePassthrough()
    })
    chain = parallel_chain | prompt | llm | StrOutputParser()
    response = chain.invoke(query)
    return response
