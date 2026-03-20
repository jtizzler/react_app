import { useNavigate } from "react-router-dom";

export function DashboardButton() {
    const navigate = useNavigate();

    return (
        <button onClick= {() => navigate("/Home")
}>
    Back to Home
        </button>
    );
}