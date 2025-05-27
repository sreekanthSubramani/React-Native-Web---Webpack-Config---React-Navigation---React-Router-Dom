import {View, StyleSheet, Text} from 'react-native'


export default function Navbar(){

    const date = new Date().getDate()
    const monthStream = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct' , 'Nov', 'Dec']
    const monthNumAlloc = new Date().getMonth()
    let actualMonth = monthStream[monthNumAlloc]
    let year = new Date().getFullYear()



    return(
        <>
            <View style={styles.mainNavBar}>
                <View style={styles.insideNavBar}>
                   

                    <View style={styles.daysCount}>
                        <Text style={styles.content}>{date}</Text>
                        <Text style={styles.content}>{actualMonth}</Text>
                        <Text style={styles.content}>{year}</Text>
                    </View>

                    <View style={styles.myStyle}>
                    <Text style={styles.taskEye}>Task Eye</Text>    
                    </View>
                
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainNavBar :{
        width : "100dvw",
        height : "10dvh",
        backgroundColor : 'green',
        justifyContent : "center",
        paddingHorizontal : 16
    },
    insideNavBar :{
     flexDirection : 'row',
     justifyContent : "space-between",
     alignItems : "center",
    },
    content :{
        color : "white",
        fontSize : 14,
        fontFamily : "Arial"
    },
    defaultLg:{
        width : 230
    },
    myStyle:{
        flexDirection : "row",
        justifyContent : 'flex-end',
        paddingHorizontal : 20,
        gap : 20,
    },
    daysCount:{
        flexDirection : 'row',
        width : "auto",
        gap : 6
    },
    taskEye : {
        fontSize : 22,
        color : "white"
    }
})