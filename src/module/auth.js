
<v-card
class="mx-auto"
max-width="398"
color="secondary"

>
<v-row>
<v-col cols="8">
  <v-card-item :title="creditCards.nameCard" color="primary">
  </v-card-item>

</v-col>
<v-col cols="1" class="d-flex align-center">
  <v-btn 
class="" 
href="/about" 
color="secondary"
elevation="0">
<v-icon to="/abaut" icon="mdi-dots-vertical" ></v-icon>
</v-btn>
</v-col>
<v-col cols="1" class="d-flex align-center">
  <v-btn 
class="" 
href="/about" 
color="secondary"
elevation="0">
<v-icon to="/abaut" icon="mdi-dots-vertical" ></v-icon>
</v-btn>
</v-col>
<v-col cols="1" class="d-flex align-center">
  <v-btn 
class="" 
href="/about" 
color="secondary"
elevation="0">
<v-icon to="/abaut" icon="mdi-dots-vertical" ></v-icon>
</v-btn>
</v-col>
</v-row>
<!-- <hr color="#FF1867"> -->
<v-divider color="#FF1867"  :thickness="9"></v-divider>
<v-container>
    <v-row  >
        <v-row no-gutters >
            <v-col align="center" cols="12" class="text-caption" >Limite</v-col>
            <v-col  align="center" cols="12" class="text-caption">{{ creditCards.limite}}</v-col>
        </v-row>
        <v-row no-gutters >
            <v-col align="center" cols="12" class="text-caption" >Em aberto</v-col>
            <v-col  align="center" cols="12" class="text-caption">{{ creditCards.emaberto }}</v-col>
        </v-row>
        <v-row no-gutters >
            <v-col align="center" cols="12" class="text-caption" >lim.disponivel</v-col>
            <v-col  align="center" cols="12" class="text-caption" >{{creditCards.limite - creditCards.emaberto}}</v-col>
        </v-row>
    </v-row>
    <v-range-slider :model-value="[0,10]" :max="10"  color="primary" ></v-range-slider>
    <v-row  >
        <v-row no-gutters >
            <v-col align="center" cols="12" class="text-caption" >{{ creditCards.limite }}</v-col>
            <v-col  align="center" cols="12" class="text-caption" >{{ creditCards.fechamento }}</v-col>
        </v-row>
        <v-row no-gutters >
            <v-col align="center" cols="12" class="text-caption" >{{ creditCards.limite }}</v-col>
            <v-col  align="center" cols="12" class="text-caption" >{{ creditCards.fechamento }}</v-col>
        </v-row>
        <v-row no-gutters >
            <v-col align="center" cols="12" class="text-caption" >{{ creditCards.limite }}</v-col>
            <v-col  align="center" cols="12" class="text-caption" >{{ creditCards.fechamento }}</v-col>
        </v-row>
    </v-row>
    <v-row  >
        <v-col align="start" cols="6" title="ere" >{{ creditCards.limite }}</v-col>
        <v-col  align="end" cols="6" >{{ creditCards.fechamento }}</v-col>
    </v-row>
</v-container>




