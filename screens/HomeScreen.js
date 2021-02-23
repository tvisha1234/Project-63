import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            text:"",
            isSearchPressed: false,
            word: "",
            lexicalCategory: "",
            examples: [],
            definition: ""
        }
    }

    getWord=(word)=>{
        var searchKeyWord = word.toLowerCase();
        var url = 'https://rupinwhitehatjr.github.io/dictionary/' + searchKeyword + '.json';

        return fetch(url)
       .then((data)=> {
            if(data.status===200) {
                return data.json();
            }
            else {
                return null;
            }        
        }
        ,then((response)=> {
            var responseObject=response;

            if(responseObject) {
                var wordData = responseObject.definitions[0];
                var definition = wordData.description;
                var lexicalCategory = wordData.wordType;

                this.setState({
                    "word": this.state.text,
                    "definition": definition,
                    "lexicalCategory": lexicalCategory

                })
            }
            else {

            this.setState({
                "word": this.state.text,
                "definition": "Not found"
            })

            }
        })
        );
    }
    render () {
        return( 
            <View style={styles.all} >
                <TextInput 
                onChangeText={text =>{
                    this.setState({
                        text:text,
                        isSearchPressed: false,
                        word: " Loading... ",
                        lexicalCategory: "",
                        examples: [],
                        definition: ""

                    });

                }}
                value={this.state.text} />

                <TouchableOpacity  onPress={() => {
                    this.setState({isSearchPressed:true}),
                    this.getWord(this.state.text)
                }}>
                    <Text>Search</Text>
                </TouchableOpacity>

                <View> 
                    <Text>
                        Word: {" "}
                    </Text>
                    <Text>
                        {this.state.word}
                    </Text>
                </View>  

                <View>
                    <Text> 
                        Type: {" "}
                    </Text>
                    <Text>
                        {this.state.lexicalCategory}
                    </Text>
                </View>  

                <View>
                    <Text>
                        Definition: {" "}
                    </Text>
                    <Text>
                        {this.state.definition}
                    </Text>
                </View>            
            </View>
        )
    }
}

const styles = {
    all: {
        margin:50,
        backgroundColor:'white'
    }
}