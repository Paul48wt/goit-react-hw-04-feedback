export const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <div>
      {Object.keys(options).map(item => (
        <p key={item} className="statistics">
          {item.charAt(0).toUpperCase() + item.slice(1)}: {options[item]}
        </p>
      ))}
      <p className="statistics">Total: {total}</p>
      <p className="statistics">Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
