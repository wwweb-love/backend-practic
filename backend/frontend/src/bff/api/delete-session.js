
export const deleteSession = async (sessionId) => {
    
    fetch(`http://localhost:3033/sessions/${sessionId}`, {
        method: "DELETE",
    });
}
