export class autocompleteModel {
        hits: hits;
        
    }

    export class hits {
        found: number;
        start: string;
        hit:Set<hit>  
    }

    export class hit {
        id:string
        fields:fields
       
    }

      export class fields {
        city_ar:string;
        city_en:string;
        cityid:string
       
    }