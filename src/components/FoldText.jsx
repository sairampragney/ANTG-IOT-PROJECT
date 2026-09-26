export function FoldText({ children }) {
  return (
    <span className="fold-text" aria-label={children}>
      {children.split(' ').map((word, index) => (
        <span className="fold-word" key={`${word}-${index}`}>
          <span>{word}</span>
        </span>
      ))}
    </span>
  )
}
