// const InputHeight = document.querySelector('#height')
// const InputWeight = document.querySelector('#weight')
const form = document.querySelector('form')

// this use case will give you empty value

form.addEventListener('submit',function(e){
    e.preventDefault()

    const InputHeight =parseInt(document.querySelector('#height').value)
    const InputWeight =parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(InputHeight===''|| InputHeight<0||isNaN(InputHeight)){
        results.innerHTML = `Please enter a valid height ${InputHeight}`

    }
     else if(InputWeight===''|| InputWeight<0||isNaN(InputWeight)){
        results.innerHTML = `Please enter a valid weight ${InputWeight}`

    }
    else{
       const bmi= (InputWeight/((InputHeight*InputHeight)/10000)).toFixed(2)

       results.innerHTML=`<span>${bmi}</span>`
    }
    
})

