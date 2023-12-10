const containerClasses = 'min-h-screen flex justify-center items-center';
const inputClasses = 'border-red-100 border-2 w-full';
export const SignUp = () => {
  return (
    <div className={containerClasses}>
      <form className="max-w-xs flex flex-col gap-4">
        <input
          className={inputClasses}
          type="text"
          placeholder="email"
          inputMode="email"
        />
        <input
          className={inputClasses}
          type="password"
          placeholder="password"
        />
        <input
          className={inputClasses}
          type="password"
          placeholder="repeat password"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
