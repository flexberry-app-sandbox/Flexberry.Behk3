﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Behk3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Контрагенты.
    /// </summary>
    [TrimmedStringStorage(false)]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтрагентыE", new string[] {
            "КодКонтиагента as \'Код контиагента\'",
            "Наименование as \'Наименование\'",
            "Вид as \'Вид\'"})]
    [View("КонтрагентыL", new string[] {
            "КодКонтиагента as \'Код контиагента\'",
            "Наименование as \'Наименование\'",
            "Вид as \'Вид\'"})]
    public class Контрагенты : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодКонтиагента;
        
        private string fНаименование;
        
        private IIS.Behk3.Виды fВид;
        
        /// <summary>
        /// Вид.
        /// </summary>
        // *** Start programmer edit section *** (Контрагенты.Вид CustomAttributes)

        // *** End programmer edit section *** (Контрагенты.Вид CustomAttributes)
        public virtual IIS.Behk3.Виды Вид
        {
            get
            {
                // *** Start programmer edit section *** (Контрагенты.Вид Get start)

                // *** End programmer edit section *** (Контрагенты.Вид Get start)
                IIS.Behk3.Виды result = this.fВид;
                // *** Start programmer edit section *** (Контрагенты.Вид Get end)

                // *** End programmer edit section *** (Контрагенты.Вид Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагенты.Вид Set start)

                // *** End programmer edit section *** (Контрагенты.Вид Set start)
                this.fВид = value;
                // *** Start programmer edit section *** (Контрагенты.Вид Set end)

                // *** End programmer edit section *** (Контрагенты.Вид Set end)
            }
        }
        
        /// <summary>
        /// КодКонтиагента.
        /// </summary>
        // *** Start programmer edit section *** (Контрагенты.КодКонтиагента CustomAttributes)

        // *** End programmer edit section *** (Контрагенты.КодКонтиагента CustomAttributes)
        public virtual int КодКонтиагента
        {
            get
            {
                // *** Start programmer edit section *** (Контрагенты.КодКонтиагента Get start)

                // *** End programmer edit section *** (Контрагенты.КодКонтиагента Get start)
                int result = this.fКодКонтиагента;
                // *** Start programmer edit section *** (Контрагенты.КодКонтиагента Get end)

                // *** End programmer edit section *** (Контрагенты.КодКонтиагента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагенты.КодКонтиагента Set start)

                // *** End programmer edit section *** (Контрагенты.КодКонтиагента Set start)
                this.fКодКонтиагента = value;
                // *** Start programmer edit section *** (Контрагенты.КодКонтиагента Set end)

                // *** End programmer edit section *** (Контрагенты.КодКонтиагента Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Контрагенты.Наименование CustomAttributes)

        // *** End programmer edit section *** (Контрагенты.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Контрагенты.Наименование Get start)

                // *** End programmer edit section *** (Контрагенты.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Контрагенты.Наименование Get end)

                // *** End programmer edit section *** (Контрагенты.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагенты.Наименование Set start)

                // *** End programmer edit section *** (Контрагенты.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Контрагенты.Наименование Set end)

                // *** End programmer edit section *** (Контрагенты.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтрагентыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентыE", typeof(IIS.Behk3.Контрагенты));
                }
            }
            
            /// <summary>
            /// "КонтрагентыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентыL", typeof(IIS.Behk3.Контрагенты));
                }
            }
        }
    }
}
