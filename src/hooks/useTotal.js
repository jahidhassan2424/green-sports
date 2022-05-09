
const useTotal = () => {
    useEffect(() => {
        fetch('http://localhost:5000/total')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return[]
};

export default useTotal;