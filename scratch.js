   const fgMessengerHelper = () => {
  const init = ref => {
    appendTag(ref);
    loadScript();
  };

  const fbChatElem = ref => {
    const fbChat = document.createElement("div");
    const attr = {
      class: "fb-customerchat",
      attribution: "setup_tool",
      page_id: "101048385050193",
      allow_login: true,
      theme_color: "#007FFF",
      ref: window.btoa(JSON.stringify(ref))
    };
    Object.keys(attr).forEach(key => {
      fbChat.setAttribute(key, attr[key]);
    });
    return fbChat;
  };

  const appendTag = ref => {
    const bodyTag = document.querySelector("body");
    const fbRoot = document.createElement("div");
    fbRoot.setAttribute("id", "fb-root");
    const fbChat = fbChatElem(ref);
    bodyTag.appendChild(fbRoot);
    bodyTag.appendChild(fbChat);
  };

  const loadScript = () => {
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: false,
        version: "v8.0"
      });
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  const initDialog = (obj = {}) => {
    setTimeout(() => {
      if (window.FB) {
        // window.FB.Event.subscribe("customerchat.load", () => {
        // });
        window.FB.Event.subscribe("xfbml.render", () => {
          updateRef(obj);
          //window.FB.CustomerChat.show(true);
          //window.FB.CustomerChat.showDialog();
        });
        window.FB.XFBML.parse();
      }
    }, 500);
  };

  const showDialog = () => {
    window.FB.CustomerChat.showDialog();
  };

  const showPlugin = () => {
    window.FB.CustomerChat.show();
  };

  const hideDialog = () => {
    window.FB.CustomerChat.hideDialog();
  };

  const hidePlugin = () => {
    window.FB.CustomerChat.hide();
  };

  const updateRef = obj => {
    const ref = window.btoa(JSON.stringify(obj));
    setTimeout(() => {
      window.FB.CustomerChat.update({
        logged_in_greeting: ` Create ${obj.name} website in 30 secs!`,
        ref
      });
    }, 500);
  };

  return {
    initMessenger: init,
    initDialog,
    showDialog,
    showPlugin,
    hideDialog,
    hidePlugin,
    updateRef
  };
};
const fbHelperObj = fgMessengerHelper();

const objToflatArray = (obj, start) => {
	return Object.keys(obj).reduce((curr,menuItem) => {
    return typeof obj[menuItem] === 'object' ?  objToflatArray(obj[menuItem], curr) : [...curr, {[menuItem]: obj[menuItem]}]
		
	}, start ? start : [])
}
const objToflatObj = (obj, start) => {
	return Object.keys(obj).reduce((curr,menuItem) => {
    return typeof obj[menuItem] === 'object' ?  objToflatObj(obj[menuItem], curr) : {...curr, [menuItem]: obj[menuItem]}
		
	}, start ? start : {})
}

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};

x = {test: 'lorem', info:{name: 'name', lastName: 'lastName', random:{age: 123}}}

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}


// filter
const listLength = 60;
const emptyArray = new Array(listLength);
const projLocation = ['Mumbai', 'Bengaluru', 'Ahmedabad'];
const projStatus = ['On Going', 'Recently Completed', 'Legacy Projects'];
const projType= ['Apartment', 'Villas', 'Plotted Development', 'Township']
const projSize = ['2 BHK', '2.5 BHK', '3 BHK', '3.5 BHK', '4 BHK']
const projNames = [
    'Riviera Springs',
    'Aakash Homes',
    'Orchid sky',
    'Orchid Springs',
    'Riviera Sky',
    'Aakash Springs',
    'Aakash Sky',
    'Aakash Woods',
    'Riviers Woods',
    'Orchid Woods',
    'Aakash Exotica',
    'Riviers Exotica',
    'Orchid Excotica',
    'Aakash Elite',
    'Riviers Elite',
    'Orchid Elite',
    'Aakash Heaven',
    'Riviers Heaven',
    'Orchid Heaven'];
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getRandomData = (name) =>{
  return window[name][randomInteger(0, window[name].length-1)]
}
const getRandomProjSize = () => {
  return window.projSize.slice(0,randomInteger(0, window.projSize.length-1)+1)
}
const creatDataObj = () => {
  return {
    projNames: getRandomData('projNames'),
    filters: {
      projLocation: getRandomData('projLocation'),
      projStatus: getRandomData('projStatus'),
      projType: getRandomData('projType'),
      projSize: getRandomProjSize()
    }
  }
}
// function to test if arr2 is subset of arr1
function isSubset(arr1, arr2)
{
    let i = 0;
    let j = 0;
    for (i = 0; i < arr2.length; i++) {
        for (j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j])
                break;
        }
 
        /* If the above inner loop was
        not broken at all then arr2[i]
        is not present in arr1[] */
        if (j == arr1.length)
            return 0;
    }
 
    /* If we reach here then all
    elements of arr2[] are present
    in arr1[] */
    return 1;
}
function find_in_object(my_array, my_criteria) {
  return my_array.filter(function(obj) {
    return Object.keys(my_criteria).every(function(key) {
      return (Array.isArray(my_criteria[key]) &&
        (my_criteria[key].some(function(criteria) {
          return (typeof obj.filters[key] === 'string' && obj.filters[key].indexOf(criteria) === -1)
        })) || my_criteria[key].length === 0);
    });
  });
}
const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value);
function filterPlainArray(array, filters) {
  const filterKeys = Object.keys(filters);
  return array.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      return filters[key].find(filter => getValue(filter) === getValue(item.filters[key]));
    });
  });
}
const multiFilter = (arr, filters) => {
  const filterKeys = Object.keys(filters);
  return arr.filter(eachObj => {
    return filterKeys.every(eachKey => {
      if (!filters[eachKey].length) {
        return true; // passing an empty filter means that filter is ignored.
      }
      return filters[eachKey].includes(eachObj.filters[eachKey]);
    });
  });
};
const query1 = {
  projLocation: ['Mumbai','Bengaluru'],
  projStatus:['Legacy Projects','On Going'],
  projType: ['Township']							
};
const dataSet = Array.from(emptyArray, () => creatDataObj())

x123 ="trinathphbl@gmail.com";
x124="nitinnephro@gmail.com"


let obj={}
for(let i =0;i < a1[0].length;i++){
  obj[a1[0][i]] ="";
}
a1.shift();
let myNew=[]
for(let i =0; i< a1.length;i++){
 
  let o = obj;
     for(let j =0; j < a1[i].length;j++){
       o[Object.keys(o)[j]] = a1[i][j]     
     }
    myNew.push(o);
}
console.log(myNew);



//[1,2,3,4,5,6,7,8,9,10,11,12,13] original array
// divid in to buckets
/*
[1,2,3,4]
[5,6,7,8]
[9,10,11,12]
[1,2,3,4]
*/

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const noOfBucket = 4
const itmInBucket = Math.ceil(list.length / noOfBucket);
const tmpArray = Array.from(new Array(noOfBucket), (_, i) => i);
const buketItems = tmpArray.reduce((prev, curr, i, arr) => {
  const startIdx = i * itmInBucket;
  const endIdx = startIdx + itmInBucket;
  let subSet = list.slice(startIdx, endIdx);
  if (subSet.length < itmInBucket) {
    subSet = [...subSet, ...list.slice(0, itmInBucket - subSet.length)]
  }
  return [...prev, subSet];
}, []);
/* function base solution with args */
const getSubsets = ({fullArray, idx, noOfItms}) => {
  const startIdx = idx * noOfItms;
  const endIdx = startIdx + noOfItms;
  const subSet = fullArray.slice(startIdx, endIdx);
  return subSet.length < noOfItms ? [...subSet, ...fullArray.slice(0, noOfItms - subSet.length)] : subSet;
}
console.log(getSubsets({ fullArray: list, idx: 3, noOfItms: itmInBucket }))
