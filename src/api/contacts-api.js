import axios from "axios";

const contactsInstance = axios.create({
  baseURL: "https://65ca56063b05d29307e02b14.mockapi.io/phonebook/contacts"
})

export const requestContacts = async () => {
  const { data } = await contactsInstance.get("/")
  return data
}
