const form = document.getElementById("formulaire");
        
        let data
        
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const prenom = document.getElementById("prenom").value;
            const nom = document.getElementById("nom").value;
            const email = document.getElementById("Email").value;
            const mdp = document.getElementById("mdp").value;
            
            data = { prenom, nom, email, mdp };
            for(const key in data){
                if(typeof(data[key]) === "string"){
                    data[key] = parseString(data[key])
                }
            }
            console.log(data)
        });
        
        function parseString(value){
            value =value.toLowerCase()
            const stringTMP = value.split('')
            for(let i =0;i<value.length;i++){
                switch(value[i]){
                    case "è":
                    case "ê":
                    case "ë":
                    case "é":
                        stringTMP[i]= "e"
                        break
                    case "à":
                    case "â":
                        stringTMP[i]="a"
                        break
                    case "ï":
                    case "ì":
                    case "í":
                    case "î":
                        stringTMP[i]="i"
                        break
                    case "ç":
                        stringTMP[i]="c"
                        break
                    case "ñ":
                        stringTMP[i]="n"
                        break
                    case "ò":
                    case "ö":
                    case "õ":
                    case "ó":
                    case "ô":
                        stringTMP[i]="o"
                        break
                    case "œ":
                        stringTMP[i]="oe"
                        break
                    case "û":
                    case "ú":
                    case "ü":
                    case "ù":
                        stringTMP[i]="u"
                        break
                    default:
                        break
                }
            }
            value = stringTMP.join('')
            return value
        }
        
        