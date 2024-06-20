import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { BottomModal } from 'react-native-modals';


const ShowPrompt = () => {

  const navigation = useNavigation();
  const [prompt, setPrompt] = useState([]);
  const [option, setOption] = useState('About Me')
  const [answer, setAnswer] = useState('')
  const [isModalVisible, setModalVisible] = useState(false);
  const [question,setQuestion] = useState('');

  const promptss = [
    {
      id: '0',
      name: 'About Me',
      questions: [
        {
          id: '10',
          question: 'A random fact I love is',
        },
        {
          id: '11',
          question: 'Typical Sunday',
        },
        {
          id: '12',
          question: 'I go crazy for',
        },
        {
          id: '13',
          question: 'Unusual Skills',
        },
        {
          id: '14',
          question: 'My greatest strenght',
        },
        {
          id: '15',
          question: 'My simple pleasures',
        },
        {
          id: '16',
          question: 'A life goal of mine',
        },
      ],
    },
    {
      id: '2',
      name: 'Self Care',
      questions: [
        {
          id: '10',
          question: 'I unwind by',
        },
        {
          id: '11',
          question: 'A boundary of mine is',
        },
        {
          id: '12',
          question: 'I feel most supported when',
        },
        {
          id: '13',
          question: 'I hype myself up by',
        },
        {
          id: '14',
          question: 'To me, relaxation is',
        },
        {
          id: '15',
          question: 'I beat my blues by',
        },
        {
          id: '16',
          question: 'My skin care routine',
        },
      ],
    },

  ];


  const OpenModal=(item)=>{
    setModalVisible(!isModalVisible);
    setQuestion(item.question)


  }

  return (
    <>
    <SafeAreaView style={{ flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginLeft: 15 }}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }} >Available Prompts</Text>
          <Text style={{ marginRight: 15, marginTop: 5 }}>Tell people about yourself to get better matches </Text>
        </View>

        <View style={{ marginTop: 20, flexDirection: 'row', gap: 20 }}>

          <Pressable

            onPress={() => setOption("About Me")}
            style={{
              borderRadius: 10,
              borderWidth: 2,
              backgroundColor: option === 'About Me' ? ('purple') : ('white')
            }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: option === 'About Me' ? ('white') : ('black'), padding: 3
            }}>
              About Me
            </Text>
          </Pressable>

          <Pressable

            onPress={() => setOption("Self Care")}
            style={{
              borderRadius: 10,
              borderWidth: 2,
              backgroundColor: option === 'Self Care' ? ('purple') : ('white')
            }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: option === 'Self Care' ? ('white') : ('black'), padding: 3
            }}>
              Self Care
            </Text>
          </Pressable>

        </View>


        <View>
          {
            promptss?.map((itm, index) =>
            (
              <View key={index}>
                {
                  itm?.name == option && (
                    itm?.questions?.map((question, index) => (
                      <View key={index}>
                        <Pressable onPress={()=>OpenModal(question)}>

                          <Text style={{fontSize:17,marginTop:18,fontWeight:500}}>
                            {question.question}
                          </Text>
                        </Pressable>

                      </View>
                    ))
                  )
                }
              </View>
            ))
          }

        </View>
      </View>
    </SafeAreaView>
    <BottomModal
    visible={isModalVisible}
    onTouchOutside={()=>setModalVisible(!isModalVisible)}
    >

    </BottomModal>
    </>
  )
}

export default ShowPrompt

const styles = StyleSheet.create({})