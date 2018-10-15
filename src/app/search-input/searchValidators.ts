import {AbstractControl,FormGroup} from '@angular/forms';

export function searchValidate(control:AbstractControl){
    if(control && (control.value!== null || control.value!==undefined||
        control.dirty||control.touched)){
        try
        {
            //if RegExp doent return exception expression is valid
            let testValid = new RegExp(control.value);
            return null;
        }
        catch(error)
        {
            //if exaption id throw return error
            return {searchError:true};
        }
    }
}