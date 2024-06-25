import AsyncStorage from "@react-native-async-storage/async-storage";

export const SaveScreenProgress=async(ScreenName,Data)=>{
    try{ const key = `ScreenKey${ScreenName}`
 await AsyncStorage.setItem(key,JSON.stringify(Data))

 console.log(`Data saved for the screen ${ScreenName}`)
}
catch(error)
{
   console.log(error)
}
}


export const GetScreenProgress=async(ScreenName)=>{
    try{ const key = `ScreenKey${ScreenName}`
 const Data = await AsyncStorage.getItem(key)

 console.log(`Got data for the screen ${ScreenName} ${JSON.parse(Data)}`)

 return Data !==null?JSON.parse(Data):null;

 
}
catch(error)
{
   console.log(error)
}
}