
    /* eslint-disable */
    /* tslint:disable */
    
    // generated by react-imported-component, DO NOT EDIT     
    import {assignImportedComponents} from 'react-imported-component/macro';    
    
    // all your imports are defined here
    // all, even the ones you tried to hide in comments (that's the cost of making a very fast parser)
    // to remove any import from here
    // 1) use magic comment `import(/* client-side */ './myFile')` - and it will disappear
    // 2) use file filter to ignore specific locations (refer to the README)
    
    const applicationImports = assignImportedComponents([
           [() => import('./HelloWorld2'), '', './src/HelloWorld2', false],
    ]);
    
    export default applicationImports;
    
    // @ts-ignore
    if (module.hot) {
       // these imports would make this module a parent for the imported modules.
       // but this is just a helper - so ignore(and accept!) all updates
       
       // @ts-ignore
       module.hot.accept(() => null);
    }    
    