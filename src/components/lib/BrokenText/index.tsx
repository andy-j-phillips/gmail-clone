interface BrokenTextProps {
  text: string;
}
/**
 * @desc Returns text line broken into paragraph tags
 */
const BrokenText: React.FC<BrokenTextProps> = ({ text }) => {
  return (
    <>
      {text.split("\n").map((line) => (
        <p>{line}</p>
      ))}
    </>
  );
};

export default BrokenText;
