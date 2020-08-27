
export default {
    methods: {
        formatDate (date) {
            if (date != null) {
                const d = new Date(date)
                let day = d.getDate()
                let month = d.getMonth() + 1
                let year = d.getFullYear()
                month = month.toString().length < 2 ? `0${month}` : month
                day = day.toString().length < 2 ? `0${day}` : day

                return [month, day, year].join('/')
            } else {
                return null
            }
        },
        arrayOfObjectsToString(array, parentProperty, childProperty) {
            let pseudoArr = []
            if (array.length > 0) {
                if (!childProperty) {
                    array.map((v) =>{
                        pseudoArr.push(v[parentProperty])
                    })
                } else {
                    array.map((v) =>{
                        pseudoArr.push(v[parentProperty][childProperty])
                    })
                }
        
                return pseudoArr
            } else {
                return []
            }
        },
        // arrayOfObjectsToStringWithConcat(array, parentProperty, parechildProperty) {
        //     let pseudoArr = []
        //     if (array.length > 0) {
        //         if (!childProperty) {
        //             array.map((v) =>{
        //                 pseudoArr.push(v[parentProperty])
        //             })
        //         } else {
        //             array.map((v) =>{
        //                 pseudoArr.push(v[parentProperty][childProperty])
        //             })
        //         }
        
        //         return pseudoArr
        //     } else {
        //         return null
        //     }
        // },
    }
}