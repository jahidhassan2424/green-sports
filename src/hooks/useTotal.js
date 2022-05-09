
const useTotal = () => {
    useEffect(() => {
        fetch('https://vast-taiga-73720.herokuapp.com/total')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return []
};

export default useTotal;