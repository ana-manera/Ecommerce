// const useUser = () => {
//   const setUserState = useSetRecoilState(userState)
//   const toast = useToast()
//   const Registrat= async ({mail,password,nombre}) => {
//     try {
//         const {data} = await axios.post(
//             "https://strapiecommerce-production-ddba.up.railway.app/api/auth/local/register",
//             {
//                 userName: nombre,
//                 email: mail,
//                 password,
//             }
//         )
//         setUserState(data)
//         toast({
//             title: "Bienvenido",
//             description: data.mail,
//             status: "success",
//             duration: 9000,
//             isClosable: true,
//         })
//     }
//     catch(error){
//         console.log(error)
//     }
//   }
//  return ()
// }
// export default useUser
