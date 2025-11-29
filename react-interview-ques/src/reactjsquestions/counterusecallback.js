export default function Counter() {
    const [count, setCount] = useState(0);
  
    const handleIncrement = useCallback(() => {
      setCount(count + 1);
      setCount(count + 1);
    }, [count]);
  
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}> + </button>
      </div>
    );
  }
  