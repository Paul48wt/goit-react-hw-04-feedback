export const FeedbackOptions = ({ options, handleClick }) => {
  const keys = Object.keys(options);

  return (
    <div className="feedbackOptions">
      {keys.map(item => (
        <button type="button" name={item} key={item} onClick={handleClick}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};
