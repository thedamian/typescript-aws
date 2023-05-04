import { HelloProps } from "../types/formDataType"

export const Hello = ({firstName, lastName, age} :HelloProps) => {

  return (
    <>
      <h2>
        Good Morning, {firstName} {lastName}
      </h2>
    </>
  )
}
