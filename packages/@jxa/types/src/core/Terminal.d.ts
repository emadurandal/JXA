
export namespace Terminal {
    // Records
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface PrintSettings {
      /**
       * the number of copies of a document to be printed
       */
      copies?: number;
      /**
       * Should printed copies be collated?
       */
      collating?: boolean;
      /**
       * the first page of the document to be printed
       */
      startingPage?: number;
      /**
       * the last page of the document to be printed
       */
      endingPage?: number;
      /**
       * number of logical pages laid across a physical page
       */
      pagesAcross?: number;
      /**
       * number of logical pages laid out down a physical page
       */
      pagesDown?: number;
      /**
       * how errors are handled
       */
      errorHandling?: {
        [k: string]: any;
      };
      /**
       * for fax number
       */
      faxNumber?: {
        [k: string]: any;
      };
      /**
       * for target printer
       */
      targetPrinter?: {
        [k: string]: any;
      };
    }

    // Function options

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CloseOptionalParameter {
      /**
       * Whether or not changes should be saved before closing.
       */
      saving?: {
        [k: string]: any;
      };
      /**
       * The file in which to save the document.
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

    export interface SaveOptionalParameter {
      /**
       * The file in which to save the document.
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

    export interface PrintOptionalParameter {
      /**
       * The print settings to use.
       */
      withProperties?: {
        [k: string]: any;
      };
      /**
       * Should the application show the print dialog?
       */
      printDialog?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface QuitOptionalParameter {
      /**
       * Whether or not changed documents should be saved before closing.
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
      to: {
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
       * The initial contents of the object.
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

    export interface DoScriptOptionalParameter {
      /**
       * Data to be passed to the Terminal application as the command line. Deprecated; use direct parameter instead.
       */
      withCommand?: {
        [k: string]: any;
      };
      /**
       * The tab in which to execute the command
       */
      in?: {
        [k: string]: any;
      };
    }


}
export interface Terminal {
    // Functions

     /**
      * Open a document.
      * @param directParameter The file(s) to be opened.
      * 
      */
     open(directParameter: {}, ): void

     /**
      * Close a document.
      * @param directParameter the document(s) or window(s) to close.
      * @param option
      * 
      */
     close(directParameter: any, option?: Terminal.CloseOptionalParameter): void

     /**
      * Save a document.
      * @param directParameter The document(s) or window(s) to save.
      * @param option
      * 
      */
     save(directParameter: any, option?: Terminal.SaveOptionalParameter): void

     /**
      * Print a document.
      * @param directParameter The file(s), document(s), or window(s) to be printed.
      * @param option
      * 
      */
     print(directParameter: {}, option?: Terminal.PrintOptionalParameter): void

     /**
      * Quit the application.

      * @param option
      * 
      */
     quit(option?: Terminal.QuitOptionalParameter): void

     /**
      * Return the number of elements of a particular class within an object.
      * @param directParameter the object whose elements are to be counted
      * @param option
      * @return the number of elements
      */
     count(directParameter: any, option?: Terminal.CountOptionalParameter): number

     /**
      * Delete an object.
      * @param directParameter the object to delete
      * 
      */
     delete(directParameter: any, ): void

     /**
      * Copy object(s) and put the copies at a new location.
      * @param directParameter the object(s) to duplicate
      * @param option
      * 
      */
     duplicate(directParameter: any, option?: Terminal.DuplicateOptionalParameter): void

     /**
      * Verify if an object exists.
      * @param directParameter the object in question
      * @return true if it exists, false if not
      */
     exists(directParameter: any, ): boolean

     /**
      * Make a new object.

      * @param option
      * @return to the new object
      */
     make(option?: Terminal.MakeOptionalParameter): any

     /**
      * Move object(s) to a new location.
      * @param directParameter the object(s) to move
      * @param option
      * 
      */
     move(directParameter: any, option?: Terminal.MoveOptionalParameter): void

     /**
      * Runs a UNIX shell script or command.
      * @param directParameter The command to execute.
      * @param option
      * @return The tab the command was executed in.
      */
     doScript(directParameter?: string, option?: Terminal.DoScriptOptionalParameter): any

     /**
      * Open a command an ssh, telnet, or x-man-page URL.
      * @param directParameter The URL to open.
      * 
      */
     getURL(directParameter: string, ): void
}
