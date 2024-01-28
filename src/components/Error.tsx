
type ErrorMessageProps = {
    message: string;
}

const Error = ({message}: ErrorMessageProps) => {
  return (
    <div className="w-full py-10 flex justify-center items-center">
        <h1 className="text-red-500 font-montserrat">{message}</h1>
    </div>
  )
}

export default Error