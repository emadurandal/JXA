
export namespace TextEdit {
    // Records

    // Function options
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CloseOptionalParameter {
      /**
       * Specifies whether changes should be saved before closing.
       */
      saving?: {
        [k: string]: any;
      };
      /**
       * The file in which to save the object.
       */
      savingIn?: {
        [k: string]: any;
      };
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CountOptionalParameter {
      /**
       * The class of objects to be counted.
       */
      each?: {
        [k: string]: any;
      };
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DuplicateOptionalParameter {
      /**
       * The location for the new object(s).
       */
      to?: {
        [k: string]: any;
      };
      /**
       * Properties to be set in the new duplicated object(s).
       */
      withProperties?: {
        [k: string]: any;
      };
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeOptionalParameter {
      /**
       * The class of the new object.
       */
      new: {
        [k: string]: any;
      };
      /**
       * The location at which to insert the object.
       */
      at?: {
        [k: string]: any;
      };
      /**
       * The initial data for the object.
       */
      withData?: any;
      /**
       * The initial values for properties of the object.
       */
      withProperties?: {
        [k: string]: any;
      };
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MoveOptionalParameter {
      /**
       * The new location for the object(s).
       */
      to: {
        [k: string]: any;
      };
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface PrintOptionalParameter {
      /**
       * Should the application show the Print dialog?
       */
      printDialog?: boolean;
      /**
       * the print settings
       */
      withProperties?: {
        [k: string]: any;
      };
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface QuitOptionalParameter {
      /**
       * Specifies whether changes should be saved before quitting.
       */
      saving?: {
        [k: string]: any;
      };
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SaveOptionalParameter {
      /**
       * The file type in which to save the data.
       */
      as?: {
        [k: string]: any;
      };
      /**
       * The file in which to save the object.
       */
      in?: {
        [k: string]: any;
      };
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SetOptionalParameter {
      /**
       * The new value.
       */
      to: any;
    }

}
export interface TextEdit {
    // Functions

     /**
      * Close an object.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     close(directParameter: any, option?: TextEdit.CloseOptionalParameter): void

     /**
      * Return the number of elements of a particular class within an object.
      * @param directParameter the object for the command
      * @param option
      * @return undefined
      */
     count(directParameter: any, option?: TextEdit.CountOptionalParameter): number

     /**
      * Delete an object.
      * @param directParameter the object for the command
      * 
      */
     delete(directParameter: any, ): void

     /**
      * Copy object(s) and put the copies at a new location.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     duplicate(directParameter: any, option?: TextEdit.DuplicateOptionalParameter): void

     /**
      * Verify if an object exists.
      * @param directParameter the object for the command
      * @return undefined
      */
     exists(directParameter: any, ): boolean

     /**
      * Get the data for an object.
      * @param directParameter the object for the command
      * @return undefined
      */
     get(directParameter: any, ): any

     /**
      * Make a new object.

      * @param option
      * @return undefined
      */
     make(option?: TextEdit.MakeOptionalParameter): any

     /**
      * Move object(s) to a new location.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     move(directParameter: any, option?: TextEdit.MoveOptionalParameter): void

     /**
      * Open an object.
      * @param directParameter The file(s) to be opened.
      * @return undefined
      */
     open(directParameter: any, ): any

     /**
      * Print an object.
      * @param directParameter The file(s) or document(s) to be printed.
      * @param option
      * 
      */
     print(directParameter: any, option?: TextEdit.PrintOptionalParameter): void

     /**
      * Quit an application.

      * @param option
      * 
      */
     quit(option?: TextEdit.QuitOptionalParameter): void

     /**
      * Save an object.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     save(directParameter: any, option?: TextEdit.SaveOptionalParameter): void

     /**
      * Set an object's data.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     set(directParameter: any, option?: TextEdit.SetOptionalParameter): void
}
