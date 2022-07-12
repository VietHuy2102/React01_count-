function Football() {
    const shoot = (a, b) => {
        alert(b.type);
    }
    const test = (e) => shoot("Goal!", e)

    return (
        <button onClick={test}>Take the shot!</button>
    );
}
export default Football