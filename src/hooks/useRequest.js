async function useRequest(url = "", option = { method: "GET" }) {
    const baseURL = 'http://localhost:5173';
    const res = await fetch(baseURL + url, {
        method: option.method || 'GET',
        headers: {
            //全局请求头
            "Content-Type": "application/json",
            Authorization: "Bearer SOMEJWTTOKEN",
            ...option.headers
        },
        body: option.data ? JSON.stringify(option.data) : undefined,
    });
    //400状态处理
    if (res.status >= 400) {
        const error = await res.json();
        const e = new Error(res.statusText);
        e.error = error;
        e.status = res.status;
        throw e;
    }
    const result = await res.json();
    return result
}
export default useRequest;