export const Button = ({
  disabled = true,
  children,
}: {
  disabled: boolean;
  children: React.ReactNode;
}): React.JSX.Element => {
  return disabled ? (
    <button className="rounded-md px-5 py-2 md:py-0 text-nowrap mt-2 md:mt-0 bg-gray-400 cursor-not-allowed" disabled>
      {children}
    </button>
  ) : (
    <button
      type="submit"
      className="bg-blue-600 text-white rounded-md px-5 py-2 md:py-0 text-nowrap mt-2 md:mt-0 cursor-pointer"
    >
      {children}
    </button>
  );
};
