"use client";

export default function WarnPhone() {
    return (
        <body>
            <div className="flex flex-col bg-[#111627] w-full min-h-[100vh] justify-center items-center">
                <object
                    type="image/svg+xml"
                    data="/403-error-forbidden-animate.svg"
                    className="h-[50vh]"
                ></object>
                <h1 className="font-poppins w-[90%] font-bold text-xl text-center text-[#DFFDFF]">
                    Sorry because the website is not responsive yet, to make your eyes more
                    comfortable, please open it via desktop
                </h1>
                <a href="/" className="p-2 bg-white text-[#111627] font-poppins font-bold rounded-md mt-10">Back to main page</a>
            </div>
        </body>
    )
}