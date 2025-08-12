export const ErrorMsg = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-center text-sm bg-red-500 text-white p-2 mt-2 rounded-md uppercase">
      {children}
    </p>
  );
};
