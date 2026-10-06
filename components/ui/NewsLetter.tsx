const NewsLetter = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <h2 className="font-semibold italic text-2xl sm:text-3xl md:text-4xl text-center md:text-left w-full md:w-auto">
          Join our Newsletter
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 w-full max-w-lg bg-background text-foreground p-2 rounded-lg shadow-sm">
          <input
            type="email"
            placeholder="Your email address"
            required
            className="w-full h-12 px-4 border-none outline-none bg-transparent placeholder:text-muted-foreground text-base focus:ring-0"
          />
          <button
            type="submit"
            className="h-12 px-6 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
