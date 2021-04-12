const CountContext = React.createContext()

export const CountProvider = (props) => {
  const [ count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider {...props} value={value} />
}

export const useCount = () => {
  const context = React.useContext(CountContext)
  if (!context) throw new Error("Counter must be rendered within the CountProvider")
  return context
}