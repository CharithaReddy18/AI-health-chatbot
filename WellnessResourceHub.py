import streamlit as st
import random

st.set_page_config(page_title="Wellness Resource Hub", layout="wide")

# --- Sidebar Navigation ---
st.sidebar.title("🌿 Wellness Hub Menu")
page = st.sidebar.radio(
    "Go to:",
    [
        "🏠 Wellness Hub",
        "🌞 Daily Affirmation",
        "✅ Quick Self-Check",
        "📅 Daily Planner",
        "📊 Mood Tracker",
        "📚 Wellness Resources"
    ]
)

# --- Wellness categories ---
categories = {
    "🧘 Mind": [
        "Practice meditation for 5 minutes daily",
        "Try journaling your thoughts",
        "Use apps like Headspace or Calm"
    ],
    "💪 Body": [
        "Do at least 20 minutes of exercise",
        "Simple stretches help reduce stiffness",
        "Stay hydrated while being active"
    ],
    "🥗 Nutrition": [
        "Eat balanced meals with protein, carbs, and veggies",
        "Drink at least 7–8 glasses of water daily",
        "Avoid too much junk food"
    ],
    "😴 Sleep": [
        "Aim for 7–8 hours of sleep daily",
        "Avoid screen time 30 mins before bed",
        "Keep a consistent sleep schedule"
    ],
    "🌸 Stress Relief": [
        "Try deep breathing (inhale 4s, hold 4s, exhale 4s)",
        "Listen to calming music",
        "Take short breaks while working"
    ]
}

# --- Motivational Affirmations ---
affirmations = [
    "✨ You are stronger than you think.",
    "🌞 Small steps every day lead to big changes.",
    "🌸 Prioritize your well-being — you deserve it.",
    "💡 Every day is a new beginning — take a deep breath and start fresh."
]

# --- Page 1: Wellness Hub ---
if page == "🏠 Wellness Hub":
    st.title("🌿 Wellness Resource Hub")
    st.write("Click on a category to explore simple wellness tips and resources.")

    col1, col2 = st.columns(2)

    with col1:
        if st.button("🧘 Mind"):
            st.subheader("🧘 Mind Tips")
            for tip in categories["🧘 Mind"]:
                st.write("- " + tip)

        if st.button("🥗 Nutrition"):
            st.subheader("🥗 Nutrition Tips")
            for tip in categories["🥗 Nutrition"]:
                st.write("- " + tip)

        if st.button("🌸 Stress Relief"):
            st.subheader("🌸 Stress Relief Tips")
            for tip in categories["🌸 Stress Relief"]:
                st.write("- " + tip)

    with col2:
        if st.button("💪 Body"):
            st.subheader("💪 Body Tips")
            for tip in categories["💪 Body"]:
                st.write("- " + tip)

        if st.button("😴 Sleep"):
            st.subheader("😴 Sleep Tips")
            for tip in categories["😴 Sleep"]:
                st.write("- " + tip)

    st.markdown("---")
    st.success(random.choice(affirmations))

# --- Page 2: Daily Affirmation ---
elif page == "🌞 Daily Affirmation":
    st.title("🌞 Daily Positive Affirmation")
    st.write("Here’s a little boost for your day:")
    st.info(random.choice(affirmations))

# --- Page 3: Quick Self-Check ---
elif page == "✅ Quick Self-Check":
    st.title("✅ Quick Wellness Self-Check")
    st.write("Answer a few quick questions to get simple wellness advice.")

    stress = st.slider("How stressed are you feeling today?", 0, 10, 5)
    sleep = st.slider("How many hours did you sleep last night?", 0, 12, 7)
    mood = st.slider("How is your overall mood today?", 0, 10, 6)

    if st.button("Get My Wellness Tip"):
        if stress > 7:
            st.warning("😟 You seem stressed. Try deep breathing or take a short walk.")
        elif sleep < 6:
            st.warning("😴 You need more rest. Try to get at least 7–8 hours of sleep.")
        elif mood < 5:
            st.info("💙 It’s okay to have tough days. Try journaling or talking to a friend.")
        else:
            st.success("🌟 You're doing well! Keep maintaining your healthy habits.")

# --- Page 4: Daily Planner ---
elif page == "📅 Daily Planner":
    st.title("📅 Daily Planner")
    st.write("Plan your day with simple goals.")
    if "tasks" not in st.session_state:
        st.session_state.tasks = []

    new_task = st.text_input("Add a new task:")
    if st.button("➕ Add Task"):
        if new_task:
            st.session_state.tasks.append(new_task)
            st.success(f"Task added: {new_task}")

    st.subheader("✅ Your Tasks")
    for i, task in enumerate(st.session_state.tasks):
        st.write(f"- {task}")

# --- Page 5: Mood Tracker ---
elif page == "📊 Mood Tracker":
    st.title("📊 Mood Tracker")
    st.write("Log your daily mood and track progress.")

    if "moods" not in st.session_state:
        st.session_state.moods = []

    mood = st.radio("How do you feel today?", ["😊 Happy", "😐 Okay", "😟 Stressed", "😢 Sad"])
    if st.button("Log Mood"):
        st.session_state.moods.append(mood)
        st.success(f"Logged mood: {mood}")

    st.subheader("📅 Mood History")
    if st.session_state.moods:
        for entry in st.session_state.moods:
            st.write("- " + entry)
    else:
        st.info("No moods logged yet.")

# --- Page 6: Wellness Resources ---
elif page == "📚 Wellness Resources":
    st.title("📚 Wellness Resources")
    st.write("Here are some trusted resources to explore:")

    st.markdown("[🧘 Headspace – Meditation & Mindfulness](https://www.headspace.com/)")
    st.markdown("[💪 Nike Training Club – Free Workout App](https://www.nike.com/ntc-app)")
    st.markdown("[🥗 Nutrition.gov – Healthy Eating Guide](https://www.nutrition.gov/)")
    st.markdown("[😴 Sleep Foundation – Sleep Health](https://www.sleepfoundation.org/)")
    st.markdown("[🌸 Calm – Stress & Relaxation](https://www.calm.com/)")