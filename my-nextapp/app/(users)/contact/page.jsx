import contactFormAction from "./contact.action";

const ContactForm = () => {

  return (
    <div className="w-full h-screen flex justify-center bg-red-300 items-center">

      <form
        className="flex flex-col gap-3 text-black max-w-sm"
        action={contactFormAction}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="border-3"
          required
        />

        <input
          type="text"
          placeholder="ID"
          className="border-3"
          name="id"
          required
        />

        <input
          className="border-3"
          type="text"
          placeholder="Roll"
          name="roll"
          required
        />

        <button type="submit" className="bg-green-600 rounded-full w-20 m-auto mb-4 p-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm