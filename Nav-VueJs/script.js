Vue.component('my-navbar', {
        data: function () {
            return {
                buttons : [
                    {buttonLabel:"Ajouter travaux", icone:"fa fa-2x fa-wrench"},
                    {buttonLabel:"Ajouter Traitement", icone:"fa fa-2x fa-random"},
                    {buttonLabel:"Ajouter fermeture", icone:"fa fa-2x fa-wrench"},
                    {buttonLabel:"Ajouter parc matériel", icone:"fa fa-2x fa-wrench"},
                    {buttonLabel:"Ajouter observation", icone:"fa fa-2x fa-comment"},
                    {buttonLabel:"Ajouter équipe", icone:"fa fa-2x fa-users"},
                    {buttonLabel:"Ajouter incident matériel", icone:"fa fa-2x fa-car fa-rotate-180"},
                    {buttonLabel:"Ajouter pcneige", icone:"fa fa-2x fa-wrench"},
                    {buttonLabel:"Ajouter glissance", icone:"fa fa-2x fa-wrench"}
                ],
                hover:false,
                open:false,
                show:true
            }
        },

  template: '#menu-flottant',
        methods: {
            click:function(item){
                      console.log(item.buttonLabel) 
            }
        },
        mounted: function () {
        
        },
        computed : {
            menuclass : function () {
                var myclass= "";

            if (this.hover)
                myclass += ' hover-active';
            if (this.open)
                myclass += ' active';         
                return myclass;
            }
        }
})

new Vue({
  el: '#mavue'
})