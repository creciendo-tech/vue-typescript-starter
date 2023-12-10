export const initialData = async () => {
    const data = localStorage.getItem("data");
    if (data) {
        return JSON.parse(data);
    } else {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        localStorage.setItem("data", JSON.stringify(data));
        return data;
    }
};
