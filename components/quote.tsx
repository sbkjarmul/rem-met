interface QuoteProps {
  text: string;
  author: string;
  authorPosition: string;
}

const Quote = ({ text, author, authorPosition }: QuoteProps) => {
  return (
    <div className="flex flex-col gap-2 border-l-6 border-brand-blue-200 pl-4">
      <p className="text-gray-200 text-lg whitespace-pre-line max-w-sm leading-tight">
        {text}
      </p>
      <div className="flex flex-row gap-1">
        <span className="text-gray-500 text-xs whitespace-pre-line">
          - {author},
        </span>

        <span className="text-gray-500 text-xs whitespace-pre-line">
          {authorPosition}
        </span>
      </div>
    </div>
  );
};

export default Quote;
