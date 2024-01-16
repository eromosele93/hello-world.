function displayPhoneNumber() {
    var statesDropdown = document.getElementById("states");
    var selectedState = statesDropdown.options[statesDropdown.selectedIndex].value;
    var phoneNumberElement = document.getElementById("phoneNumber");
 
    var phoneNumber = getPhoneNumber(selectedState);
 
    if (phoneNumber) {
       phoneNumberElement.textContent = phoneNumber;
    } else {
       phoneNumberElement.textContent = "Phone number not available.";
    }
 }
 
 function getPhoneNumber(state) {
    // Replace the placeholder numbers with actual numbers for each state
    switch (state) {
       case "Abia":
          return "+2348079210005";

          case "Abuja":
            return "+2348061581938";
 
          case "Adamawa":
            return "+2348089671313";
 
         case "Akwa Ibom":
            return "+2348039213071";
         
        case "Anambra":
        return "+2347039194332";
 
        case "Bauchi":
        return "+2348151849417";
         
        case "Benue":
         return "+2348066006475";
     
         case "Bayelsa":
            return "+2347034578208";
 
         case "Borno":
        return "+2348068075581";
            
            
       case "Cross river":
          return "+2348133568456";
       
       case "Delta":
          return "+2348036684974";

          case "Edo":
            return "+2348037646272";
         case "Ekiti":
        return "+2348062335577";

        case "Enugu":
            return "+2348032003702";

    case "Gombe":
        return "+2348150567771";       
            
    case "Imo":
         return "+2348034773600";
        
         case "Jigawa":
            return "+2348075391069";

        case "Kaduna":
        return "+2348123822284";

        case "Kaduna":
            return "+2348123822284";

        case "Kano":
        return "+2348032419754";
            
     case "Kaduna":
                return "+2348123822284";
    
    case "Katsina":
        return "+2348075391255";

        case "Kebbi":
            return "+2348038797644";

    case "Kogi":
    return "+2348075391335";

    case "Kwara":
        return "+2347032069501";

        case "Lagos":
            return "+2347055462708";

     case "Nassarawa":
    return "+2348123821571";

    case "Niger":
        return "+2348081777498";

    case "Ogun":
        return "+2348032136765";
    
        case "Ondo":
            return "+2347034313903"; 
    
     case "Osun":
    return "+2348075872433"; 
            
    case "Oyo":
        return "+2348081768614"; 

    case "Plateau":
     return "+2348126375938"; 

     case "Rivers":
        return "+2348032003514"; 

        case "Sokoto":
            return "+2347068848035"; 

        case "Taraba":
        return "+2348140089863"; 

        case "Yobe":
            return "+2347039301585"; 


            case "Zamfara":
                return "+2348106580123"; 

       default:
          return null;
    }
 }
 