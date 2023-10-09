const sayHello = name => console.log('Hi ' + name);

sayHello("Bebe");

const yeb = (name,game) => console.log( `Sup ${name} and ${game}`);

  yeb("Deni","Oleg");

const tsk2 = ()=> console.log ('I did it!!!')
tsk2();
const tsk3 = (b) => "Hi " + b;
console.log (tsk3('Todi'));

const tsk4 = (name,game = "The one") => console.log( `Sup ${name} and ${game}`);
tsk4("Coln");
tsk4("Cos","Sas")

function checkInput (cb,...string){
  let hasEmptyText = false;
  for (const text of string) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}
checkInput( 
  () =>  {
    console.log('All not Empty');
  },
  'Hello',
  '12',
  'adsfa'
)