import { FormEvent, useRef } from "react";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendMessage = (event: FormEvent) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const comp =
      (document.getElementById("comp") as HTMLInputElement).value || "-"; // Using `comp` instead of `agency`
    const pesan = (document.getElementById("pesan") as HTMLTextAreaElement)
      .value;

    const formattedMessage = `Hi Naufal, I'm ${name} from ${comp}. I would like to give you a message: ${pesan}`;

    const whatsappLink = `https://wa.me/6289630442193/?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(whatsappLink, "_blank");

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <form
      onSubmit={sendMessage}
      ref={formRef}
      className="flex flex-col w-full gap-2 md:w-5/12" data-aos="fade-left"
    >
      <h1 className="font-poppins font-bold text-4xl md:text-6xl text-[#DFFDFF]">
        Contact Naufal
      </h1>

      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="bg-[#393C47] rounded-lg text-bold p-2 border-[1px] border-white placeholder:font-bold placeholder:font-montserrat outline-none"
      />
      <input
        type="text"
        name="comp"
        id="comp"
        className="bg-[#393C47] rounded-lg text-bold p-2 border-[1px] border-white placeholder:font-bold placeholder:font-montserrat outline-none"
        placeholder="Company or Organization"
      />
      <textarea
        name="pesan"
        id="pesan"
        cols={30}
        rows={10}
        placeholder="Your message"
        className="bg-[#393C47] p-2 rounded-lg text-bold border-[1px] border-white placeholder:font-bold placeholder:font-montserrat outline-none "
      ></textarea>

      <div className="flex w-full py-1 flex-row-reverse">
        <input
          type="submit"
          value="Send"
          className="py-1 px-5 rounded-lg bg-[#00962D] border-1 border-white text-white font-bold cursor-pointer"
        />
      </div>
    </form>
  );
};

export default Form;
