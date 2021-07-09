# useStateStorage

useStateStorage is a custom hook for react that allows you to save local state to local storage.


### example useage:

```
const [value, setValue] =  useStateStorage('id');
const [inputValue, setInputValue] = useState('');
const handleInput = (e) => { setInputValue(e.target.value); }

<input type="text" onChange={handleInput}  />
<button onClick={() => setValue(inputValue)}>update</button>
```

