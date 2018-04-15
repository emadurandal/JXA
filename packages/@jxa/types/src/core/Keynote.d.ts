
export namespace Keynote {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A master slide in a theme or slideshow document
  */
 export interface MasterSlide {
   /**
    * The name of the master slide
    */
   name: string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A slide in a slideshow document
  */
 export interface Slide {
   /**
    * The master slide this slide is based upon
    */
   baseSlide: any;
   /**
    * Is the default body text displayed?
    */
   bodyShowing: boolean;
   /**
    * Is the slide skipped?
    */
   skipped: boolean;
   /**
    * index of the slide in the document
    */
   slideNumber: number;
   /**
    * Is the default slide title displayed?
    */
   titleShowing: boolean;
   /**
    * The default body container of the slide
    */
   defaultBodyItem: any;
   /**
    * The default title container of the slide
    */
   defaultTitleItem: any;
   /**
    * The presenter notes for the slide
    */
   presenterNotes: any;
   /**
    * The transition settings to apply to the slide.
    */
   transitionProperties: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A collection of master slides, with shared design intents and elements.
  */
 export interface Theme {
   /**
    * The identifier used by the application.
    */
   id: string;
   name: string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This provides the base rich text class for all iWork applications.
  */
 export interface RichText {
   /**
    * The color of the font. Expressed as an RGB value consisting of a list of three color values from 0 to 65535. ex: Blue = {0, 0, 65535}.
    */
   color: any;
   /**
    * The name of the font. Can be the PostScript name, such as: “TimesNewRomanPS-ItalicMT”, or display name: “Times New Roman Italic”. TIP: Use the Font Book application get the information about a typeface.
    */
   font: string;
   /**
    * The size of the font.
    */
   size: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * One of some text's characters.
  */
 export interface Character {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * One of some text's paragraphs.
  */
 export interface Paragraph {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * One of some text's words.
  */
 export interface Word {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A container for iWork items
  */
 export interface IWorkContainer {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An item which supports formatting
  */
 export interface IWorkItem {
   /**
    * The height of the iWork item.
    */
   height: number;
   /**
    * Whether the object is locked.
    */
   locked: boolean;
   /**
    * The iWork container containing this iWork item.
    */
   parent: any;
   /**
    * The horizontal and vertical coordinates of the top left point of the iWork item.
    */
   position: any;
   /**
    * The width of the iWork item.
    */
   width: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An audio clip
  */
 export interface AudioClip {
   /**
    * The name of the audio file.
    */
   fileName: any;
   /**
    * The volume setting for the audio clip, from 0 (none) to 100 (full volume).
    */
   clipVolume: number;
   /**
    * If or how the audio clip repeats.
    */
   repetitionMethod: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A shape container
  */
 export interface Shape {
   /**
    * The background, if any, for the shape.
    */
   backgroundFillType: any;
   /**
    * The text contained within the shape.
    */
   objectText: any;
   /**
    * Is the iWork item displaying a reflection?
    */
   reflectionShowing: boolean;
   /**
    * The percentage of reflection of the iWork item, from 0 (none) to 100 (full).
    */
   reflectionValue: number;
   /**
    * The rotation of the iWork item, in degrees from 0 to 359.
    */
   rotation: number;
   /**
    * The opacity of the object, in percent.
    */
   opacity: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A chart
  */
 export interface Chart {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An image container
  */
 export interface Image {
   /**
    * Text associated with the image, read aloud by VoiceOver.
    */
   description: string;
   /**
    * The image file.
    */
   file: any;
   /**
    * The name of the image file.
    */
   fileName: any;
   /**
    * The opacity of the object, in percent.
    */
   opacity: number;
   /**
    * Is the iWork item displaying a reflection?
    */
   reflectionShowing: boolean;
   /**
    * The percentage of reflection of the iWork item, from 0 (none) to 100 (full).
    */
   reflectionValue: number;
   /**
    * The rotation of the iWork item, in degrees from 0 to 359.
    */
   rotation: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A group container
  */
 export interface Group {
   /**
    * The height of the iWork item.
    */
   height: number;
   /**
    * The iWork container containing this iWork item.
    */
   parent: any;
   /**
    * The horizontal and vertical coordinates of the top left point of the iWork item.
    */
   position: any;
   /**
    * The width of the iWork item.
    */
   width: number;
   /**
    * The rotation of the iWork item, in degrees from 0 to 359.
    */
   rotation: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A line
  */
 export interface Line {
   /**
    * A list of two numbers indicating the horizontal and vertical position of the line ending point.
    */
   endPoint: any;
   /**
    * Is the iWork item displaying a reflection?
    */
   reflectionShowing: boolean;
   /**
    * The percentage of reflection of the iWork item, from 0 (none) to 100 (full).
    */
   reflectionValue: number;
   /**
    * The rotation of the iWork item, in degrees from 0 to 359.
    */
   rotation: number;
   /**
    * A list of two numbers indicating the horizontal and vertical position of the line starting point.
    */
   startPoint: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A movie container
  */
 export interface Movie {
   /**
    * The name of the movie file.
    */
   fileName: any;
   /**
    * The volume setting for the movie, from 0 (none) to 100 (full volume).
    */
   movieVolume: number;
   /**
    * The opacity of the object, in percent.
    */
   opacity: number;
   /**
    * Is the iWork item displaying a reflection?
    */
   reflectionShowing: boolean;
   /**
    * The percentage of reflection of the iWork item, from 0 (none) to 100 (full).
    */
   reflectionValue: number;
   /**
    * If or how the movie repeats.
    */
   repetitionMethod: any;
   /**
    * The rotation of the iWork item, in degrees from 0 to 359.
    */
   rotation: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A table
  */
 export interface Table {
   /**
    * The item's name.
    */
   name: string;
   /**
    * The range describing every cell in the table.
    */
   cellRange: any;
   /**
    * The cells currently selected in the table.
    */
   selectionRange: any;
   /**
    * The number of rows in the table.
    */
   rowCount: number;
   /**
    * The number of columns in the table.
    */
   columnCount: number;
   /**
    * The number of header rows in the table.
    */
   headerRowCount: number;
   /**
    * The number of header columns in the table.
    */
   headerColumnCount: number;
   /**
    * The number of footer rows in the table.
    */
   footerRowCount: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A text container
  */
 export interface TextItem {
   /**
    * The background, if any, for the text item.
    */
   backgroundFillType: any;
   /**
    * The text contained within the text item.
    */
   objectText: any;
   /**
    * The opacity of the object, in percent.
    */
   opacity: number;
   /**
    * Is the iWork item displaying a reflection?
    */
   reflectionShowing: boolean;
   /**
    * The percentage of reflection of the iWork item, from 0 (none) to 100 (full).
    */
   reflectionValue: number;
   /**
    * The rotation of the iWork item, in degrees from 0 to 359.
    */
   rotation: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A range of cells in a table
  */
 export interface Range {
   /**
    * The font of the range's cells.
    */
   fontName: string;
   /**
    * The font size of the range's cells.
    */
   fontSize: any;
   /**
    * The format of the range's cells.
    */
   format: any;
   /**
    * The horizontal alignment of content in the range's cells.
    */
   alignment: any;
   /**
    * The range's coordinates.
    */
   name: string;
   /**
    * The text color of the range's cells.
    */
   textColor: any;
   /**
    * Whether text should wrap in the range's cells.
    */
   textWrap: boolean;
   /**
    * The background color of the range's cells.
    */
   backgroundColor: any;
   /**
    * The vertical alignment of content in the range's cells.
    */
   verticalAlignment: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A cell in a table
  */
 export interface Cell {
   /**
    * The cell's column.
    */
   column: any;
   /**
    * The cell's row.
    */
   row: any;
   /**
    * The actual value in the cell, or missing value if the cell is empty.
    */
   value: any;
   /**
    * The formatted value in the cell, or missing value if the cell is empty.
    */
   formattedValue: string;
   /**
    * The formula in the cell, as text, e.g. =SUM(40+2). If the cell does not contain a formula, returns missing value. To set the value of a cell to a formula as text, use the value property.
    */
   formula: string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A row of cells in a table
  */
 export interface Row {
   /**
    * The row's index in the table (e.g., the second row has address 2).
    */
   address: number;
   /**
    * The height of the row.
    */
   height: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A column of cells in a table
  */
 export interface Column {
   /**
    * The column's index in the table (e.g., the second column has address 2).
    */
   address: number;
   /**
    * The width of the column.
    */
   width: any;
 }
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The Keynote application.
  */
 export interface Application {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The Keynote document.
  */
 export interface Document {
   /**
    * Document ID.
    */
   id: string;
   /**
    * Are the slide numbers displayed?
    */
   slideNumbersShowing: boolean;
   /**
    * The theme assigned to the document.
    */
   documentTheme: any;
   /**
    * Make the slideshow play repeatedly.
    */
   autoLoop: boolean;
   /**
    * Automatically play the presentation when opening the file.
    */
   autoPlay: boolean;
   /**
    * Restart the slideshow if it's inactive for the specified time
    */
   autoRestart: boolean;
   /**
    * Restart the slideshow if it's inactive for the specified time
    */
   maximumIdleDuration: number;
   /**
    * The currently selected slide, or the slide that would display if the presentation was started.
    */
   currentSlide: any;
   /**
    * The height of the document (in points). Standard slide height = 768. Wide slide height = 1080.
    */
   height: number;
   /**
    * The width of the document (in points). Standard slide width = 1024. Wide slide width = 1920.
    */
   width: number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Deprecated Keynote application properties and verbs.
  */
 export interface Application {
   /**
    * Are any slideshows playing
    */
   playing: boolean;
   /**
    * Is the slide selector visible?
    */
   slideSwitcherVisible: boolean;
   frozen: boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface Document {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface Slide {}
    
    // Records
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface ExportOptions {
   /**
    * compressed image quality, ranging from 0.0 (maximum compression, lowest quality) to 1.0 (lossless compression, highest quality). This option only pertains to JPEG format images.
    */
   compressionFactor: any;
   /**
    * format for resulting images.
    */
   imageFormat: any;
   /**
    * format for exported movie.
    */
   movieFormat: any;
   /**
    * choose whether to include notes, etc.
    */
   exportStyle: any;
   /**
    * print each stage of builds
    */
   allStages: boolean;
   /**
    * include skipped slides
    */
   skippedSlides: boolean;
   /**
    * add borders around slides
    */
   borders: boolean;
   /**
    * include slide numbers
    */
   slideNumbers: boolean;
   /**
    * include date
    */
   date: boolean;
   /**
    * export in raw KPF
    */
   rawKPF: boolean;
   /**
    * password
    */
   password: string;
   /**
    * password hint
    */
   passwordHint: string;
   /**
    * quality of images in PDF document
    */
   PDFImageQuality: any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Properties common to all transitions
  */
 export interface TransitionSettings {
   /**
    * Should the transition begin automatically? A value of false indicates to transition on click.
    */
   automaticTransition: boolean;
   /**
    * The number of seconds to wait until beginning the transition.
    */
   transitionDelay: any;
   /**
    * The number of seconds allocated for the transition to occur.
    */
   transitionDuration: any;
   /**
    * The transition effect to apply between the current and following slides.
    */
   transitionEffect: any;
 }

    // Function options
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ExportOptionalParameter {
      /**
       * the destination file
       */
      to: any;
      /**
       * The format to use.
       */
      as: any;
      /**
       * Optional export settings.
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DuplicateOptionalParameter {
      /**
       * The location for the new copy or copies.
       */
      to?: any;
      /**
       * Properties to set in the new copy or copies right away.
       */
      withProperties?: any;
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


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeOptionalParameter {
      /**
       * The class of the new object.
       */
      new: any;
      /**
       * The location at which to insert the object.
       */
      at?: any;
      /**
       * The initial contents of the object.
       */
      withData?: any;
      /**
       * The initial values for properties of the object.
       */
      withProperties?: any;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SortOptionalParameter {
      /**
       * The column to sort by.
       */
      by: any;
      direction?: any;
      /**
       * Limit the sort to the specified rows.
       */
      inRows?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface AddChartOptionalParameter {
      rowNames?: any;
      columnNames?: any;
      data?: any;
      type?: any;
      groupBy?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface StartOptionalParameter {
      /**
       * slide at which to start playing
       */
      from?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeImageSlidesOptionalParameter {
      /**
       * a list of image files to add
       */
      files: any;
      setTitles?: boolean;
      master?: any;
    }














}
export interface Keynote extends Keynote.Application {
    // Functions

     /**
      * Export a slideshow to another file
      * @param directParameter The slideshow to export
      * @param option
      * 
      */
     export(directParameter: Keynote.Document, option?: Keynote.ExportOptionalParameter): void;

     /**
      * Copy an object.
      * @param directParameter The object(s) to copy.
      * @param option
      * 
      */
     duplicate(directParameter: any, option?: Keynote.DuplicateOptionalParameter): void;

     /**
      * Sets the value of the specified object(s).
      * @param directParameter undefined
      * @param option
      * 
      */
     set(directParameter: any, option?: Keynote.SetOptionalParameter): void;

     /**
      * Delete an object.
      * @param directParameter undefined
      * 
      */
     delete(directParameter: any, ): void;

     /**
      * Create a new object.

      * @param option
      * @return The new object.
      */
     make(option?: Keynote.MakeOptionalParameter): any;

     /**
      * Clear the contents of a specified range of cells, including formatting and style.
      * @param directParameter undefined
      * 
      */
     clear(directParameter: Keynote.Range, ): void;

     /**
      * Merge a specified range of cells.
      * @param directParameter undefined
      * 
      */
     merge(directParameter: Keynote.Range, ): void;

     /**
      * Sort the rows of the table.
      * @param directParameter undefined
      * @param option
      * 
      */
     sort(directParameter: Keynote.Table, option?: Keynote.SortOptionalParameter): void;

     /**
      * Unmerge all merged cells in a specified range.
      * @param directParameter undefined
      * 
      */
     unmerge(directParameter: Keynote.Range, ): void;

     /**
      * Add a chart to a slide
      * @param directParameter the slide to add the chart to
      * @param option
      * 
      */
     addChart(directParameter: Keynote.Slide, option?: Keynote.AddChartOptionalParameter): void;

     /**
      * Start playing the presentation.
      * @param directParameter The presentation to play
      * @param option
      * 
      */
     start(directParameter: Keynote.Document, option?: Keynote.StartOptionalParameter): void;

     /**
      * Make a series of slides from a list of files.
      * @param directParameter the document to add the slides to
      * @param option
      * 
      */
     makeImageSlides(directParameter: Keynote.Document, option?: Keynote.MakeImageSlidesOptionalParameter): void;

     /**
      * Stop the presentation.
      * @param directParameter undefined
      * 
      */
     stop(directParameter: Keynote.Document, ): void;

     /**
      * Advance one build or slide.

      * 
      */
     showNext(): void;

     /**
      * Go to the previous slide.

      * 
      */
     showPrevious(): void;

     /**
      * Show the slide switcher in play mode
      * @param directParameter undefined
      * 
      */
     showSlideSwitcher(directParameter: Keynote.Document, ): void;

     /**
      * Hide the slide switcher in play mode
      * @param directParameter undefined
      * 
      */
     hideSlideSwitcher(directParameter: Keynote.Document, ): void;

     /**
      * Move the slide switcher forward one slide
      * @param directParameter undefined
      * 
      */
     moveSlideSwitcherForward(directParameter: Keynote.Document, ): void;

     /**
      * Move the slide switcher backward one slide
      * @param directParameter undefined
      * 
      */
     moveSlideSwitcherBackward(directParameter: Keynote.Document, ): void;

     /**
      * Hide the slide switcher without changing slides
      * @param directParameter undefined
      * 
      */
     cancelSlideSwitcher(directParameter: Keynote.Document, ): void;

     /**
      * Hide the slide switcher, going to the slide it has selected
      * @param directParameter undefined
      * 
      */
     acceptSlideSwitcher(directParameter: Keynote.Document, ): void;

     /**
      * 

      * 
      */
     startSlideshow(): void;

     /**
      * 
      * @param directParameter the object for the command
      * 
      */
     startFrom(directParameter: Keynote.Slide, ): void;

     /**
      * 

      * 
      */
     stopSlideshow(): void;

     /**
      * 
      * @param directParameter the object for the command
      * 
      */
     show(directParameter: Keynote.Slide, ): void;
}
