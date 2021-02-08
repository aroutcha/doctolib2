import React, { Component } from 'react';
import { changeIsLogged, login } from '../Service/DataService';
import {notification} from "antd"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user : {
                login : '',
                password : ''
            }
         }
    }

    changeField = (event)=> {
        let tmpUser = {...this.state.user}
        tmpUser[event.target.getAttribute("name")] = event.target.value
        this.setState({
            user : tmpUser
        })
    }
    clickConnect = () => {
        if(login(this.state.user.login, this.state.user.password)){
            changeIsLogged(true)
            if(this.props.match.params.url != undefined) {
                this.props.history.push("/"+this.props.match.params.url)
            }
            else {
                this.props.history.push("/")
            }
        }
        else {
            notification.open({
                message: 'Erreur login',
                description:
                  'Merci de corriger les informations de login',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
                duration : 2
              });
        }
    }
    render() { 
        return ( 
            
            <div className="container ">
                
                <div className="row m-3 justify-content-center">
                    <input type="text" onChange={this.changeField} className="col-6 form-control" name="login" placeholder="Identifiant" />
                </div>
                <div className="row m-3 justify-content-center">
                    <input type="password" onChange={this.changeField} className="col-6 form-control" name="password" placeholder="Mot de passe" />
                </div>
                <div className="row m-3 justify-content-center">
                    <button onClick={this.clickConnect} className="col-6 btn btn-info">se connecter</button>
                </div>
            </div>


/* <div class="dl-layout-body dl-layout-body-bottom dl-layout-body-size-small">
    <div class="dl-authentication-step dl-authentication-step-reverse">
        <div class="dl-card dl-card-bg-white dl-margin" data-test="signup-card" component="div">
            <div class="dl-card-content">
                <div class="dl-text dl-text-title dl-text-bold dl-text-s dl-text-center">Nouveau sur Doctolib ?</div>
                <form autocomplete="off">
                    <div class="dl-toggleable-form" aria-hidden="true" style="max-height: 0px;">
                        <p class="dl-text dl-text-body dl-text-regular dl-text-s dl-text-center dl-margin-y">Saisissez vos informations pour continuer.</p>
                        <div class="dc-form-field-set">
                            <div class="dl-text dl-text-body dl-text-bold dl-text-s dl-input-hint">Un code va vous être envoyé sur ce numéro pour valider votre compte.</div>
                            <div class="dc-form-field-set-group">
                                <div class="dc-form-field-set-content">
                                    <div class="dc-form-row">
                                        <div class="dc-form-group dc-form-row-group">
                                            <span class="dl-input-container dl-input-container-icon-position-left">
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" class="dl-input-icon-component">
                                                    <path d="M17.419 2.769A.75.75 0 0118 3.5C18 11.516 11.503 18 3.5 18a.75.75 0 01-.731-.581l-.75-3.25a.759.759 0 01.437-.863l3.5-1.5a.75.75 0 01.875.216l1.55 1.894a11.582 11.582 0 005.538-5.538l-1.894-1.55a.748.748 0 01-.216-.875l1.5-3.5a.755.755 0 01.86-.434l3.25.75z">
                                                        </path></svg>
                                                        <input type="tel" class="dc-input dc-text-input dl-input-with-icon dc-text-input-disabled" name="phone_number" id="phone_number" placeholder="Téléphone portable (sinon fixe)" required="" disabled="" tabindex="-1" autocomplete="off" value="">
                                                            </span>
                                                            <span class="dc-validity-indicator"></span>
                                                            </div></div></div></div></div>
                                                            <div class="dc-form-field-set"
                                                            ><div class="dc-form-field-set-group">
                                                                <div class="dc-form-field-set-content">
                                                                    <div class="dc-form-row">
                                                                        <div class="dc-form-group dc-form-row-group">
                                                                        <span class="dl-input-container dl-input-container-icon-position-left">
                                                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" class="dl-input-icon-component">
                                                                                <path d="M17.697 7.963a.188.188 0 01.303.146V14.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 14.5V8.113c0-.157.178-.244.303-.147.7.543 1.628 1.234 4.816 3.55.66.48 1.772 1.493 2.881 1.487 1.116.01 2.25-1.025 2.884-1.487 3.188-2.316 4.113-3.01 4.813-3.553zM10 12c-.725.013-1.769-.912-2.294-1.294-4.147-3.01-4.462-3.275-5.418-4.022A.752.752 0 012 6.094V5.5A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v.594c0 .231-.106.45-.288.59-.956.75-1.271 1.013-5.418 4.022-.525.382-1.569 1.307-2.294 1.294z">
                                                                                    </path></svg>
                                                                                    <input type="email" class="dc-input dc-text-input dl-input-with-icon dc-text-input-disabled" name="email" id="email" placeholder="Votre adresse email" required="" disabled="" tabindex="-1" autocomplete="off" value="">
                                                                                        </span>
                                                                                        <span class="dc-validity-indicator"></span>
                                                                                        </div></div></div></div></div>
                                                                                        <div class="dc-form-field-set">
                                                                                            <div class="dc-form-field-set-group">
                                                                                                <div class="dc-form-field-set-content">
                                                                                                    <div class="dc-form-row">
                                                                                                        <div class="dc-form-group dc-form-row-group">
                                                                                                            
                                                                                                            <span class="dl-input-container dl-input-container-icon-position-left">
                                                                                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" class="dl-input-icon-component">
                                                                                                                    <path d="M17.697 7.963a.188.188 0 01.303.146V14.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 14.5V8.113c0-.157.178-.244.303-.147.7.543 1.628 1.234 4.816 3.55.66.48 1.772 1.493 2.881 1.487 1.116.01 2.25-1.025 2.884-1.487 3.188-2.316 4.113-3.01 4.813-3.553zM10 12c-.725.013-1.769-.912-2.294-1.294-4.147-3.01-4.462-3.275-5.418-4.022A.752.752 0 012 6.094V5.5A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v.594c0 .231-.106.45-.288.59-.956.75-1.271 1.013-5.418 4.022-.525.382-1.569 1.307-2.294 1.294z">
                                                                                                                    </path></svg><input type="email" class="dc-input dc-text-input dl-input-with-icon dc-text-input-disabled" name="email_confirmation" id="email_confirmation" placeholder="Confirmez votre adresse email" required="" disabled="" tabindex="-1" autocomplete="off" value="">
                                                                                                                        </span>
                                                                                                                        <span class="dc-validity-indicator"></span>
                                                                                                                        </div></div></div></div></div><div class="dc-form-field-set">
                                                                                                                            <div class="dl-text dl-text-body dl-text-bold dl-text-s dl-input-hint" aria-live="polite">Votre mot de passe vous permettra de gérer vos rendez-vous médicaux.</div>
                                                                                                                    <div class="dc-form-field-set-group">
                                                                                                                        <div class="dc-form-field-set-content">
                                                                                                                        <div class="dc-form-row"><div class="dl-full-width">
                                                                                                                            <div class="dc-form-group dc-form-row-group">
                                                                                                                            <span class="dl-input-container dl-input-container-icon-position-left dl-input-container-icon-position-right">
                                                                                                                                <svg class="dl-icon dl-input-icon-component dl-icon-small" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 7.2h-.6V5.4c0-2.095-1.705-3.8-3.8-3.8a3.805 3.805 0 00-3.8 3.8v1.8h-.6a1.2 1.2 0 00-1.2 1.2v4.8a1.2 1.2 0 001.2 1.2h8.8a1.2 1.2 0 001.2-1.2V8.4a1.2 1.2 0 00-1.2-1.2zM9 11.4a1 1 0 11-2 0v-1.2a1 1 0 112 0v1.2zm.8-4.2H6.2V5.4c0-.993.808-1.8 1.8-1.8.993 0 1.8.807 1.8 1.8v1.8z"></path></svg>
                                                                                                                                <input type="password" class="dc-input dc-text-input dl-input-with-icon dc-text-input-disabled" name="password" id="password" placeholder="Choisissez un mot de passe" required="" disabled="" tabindex="-1" autocomplete="new-password" minlength="8" value=""><svg class="dl-input-visibility-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"></path><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg></span><span class="dc-validity-indicator"></span></div><div class="dl-password-indicator-container"><div class="dl-password-indicator dl-password-indicator-0"></div></div></div></div></div></div></div><hr class="dl-divider" aria-hidden="true"><div class="dl-margin-y"><label class="dl-checkbox-label"><input type="checkbox" class="dl-checkbox-control" name="cgu" disabled="">
                                                                                                                        <div class="dl-checkbox dl-checkbox-disabled">
                                                                                                                            <svg class="dl-icon dl-checkbox-icon dl-icon-small" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.947 12.585l-4.16-4.16a.64.64 0 010-.905l.906-.905a.64.64 0 01.905 0L6.4 9.417l6.002-6.002a.64.64 0 01.905 0l.906.905a.64.64 0 010 .905l-7.36 7.36a.64.64 0 01-.906 0z"></path>
                                                                                            </svg></div>
                                                                                            <span class="dl-checkbox-label-text dl-checkbox-label-disabled">J'accepte les <a href="#" tabindex="-1"> Conditions d'Utilisation de Doctolib </a
                                                                                            </span></label><label class="dl-checkbox-label"><input type="checkbox" class="dl-checkbox-control" name="remember_username" disabled="" checked="">
                                                                                                <div class="dl-checkbox dl-checkbox-disabled">
                                                                                                    <svg class="dl-icon dl-checkbox-icon dl-icon-small" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.947 12.585l-4.16-4.16a.64.64 0 010-.905l.906-.905a.64.64 0 01.905 0L6.4 9.417l6.002-6.002a.64.64 0 01.905 0l.906.905a.64.64 0 010 .905l-7.36 7.36a.64.64 0 01-.906 0z"></path></svg></div><span class="dl-checkbox-label-text dl-checkbox-label-disabled">Se souvenir de mon identifiant</span></label></div></div><button class="Tappable-inactive dl-button-info-link dl-toggleable-form-button dl-toggleable-form-button-flat dl-button dl-button-block dl-button-size-normal" role="button" type="button" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none; cursor: pointer;"><span class="dl-button-label">S'inscrire</span></button></form></div></div><div class="dl-card dl-card-bg-white dl-margin" data-test="login-card" component="div"><div class="dl-card-content"><div class="dl-text dl-text-title dl-text-bold dl-text-s dl-text-center">J'ai déjà un compte Doctolib</div><form><div class="dl-toggleable-form" style="max-height: 350px;"><div class="dc-form-field-set"><div class="dc-form-field-set-group"><div class="dc-form-field-set-content"><div class="dc-form-row"><div class="dc-form-group dc-form-row-group"><span class="dl-input-container"><input type="text" class="dc-input dc-text-input" name="username" id="username" placeholder="Adresse email ou numéro de téléphone" required="" title="Adresse email ou numéro de téléphone" pattern=".*?\S.*" autocomplete="username" value=""></span></div></div></div></div></div><div class="dc-form-field-set"><div class="dc-form-field-set-group"><div class="dc-form-field-set-content"><div class="dc-form-row"><div class="dc-form-group dc-form-row-group"><span class="dl-input-container dl-input-container-icon-position-left dl-input-container-icon-position-right">
                                                                            <svg width="18" height="20" viewBox="0 0 18 20" class="dl-input-icon-component">
                                                                                <path d="M16.44 7.03c.3 0 .65.16 1.06.46.33.3.5.6.5.9v9.2c0 .76-.4 1.3-1.2 1.56l-1.57.4a7.3 7.3 0 01-2.46.4h-7.5c-.93 0-1.77-.14-2.5-.4l-1.56-.4c-.8-.3-1.2-.8-1.2-1.56V8.4c0-.33.18-.65.4-.96.35-.3.65-.47.9-.47h2.6V5.4c0-1.77.45-3.1 1.3-4C6.04.5 7.3 0 9 0c1.7 0 2.98.48 3.82 1.43.87.88 1.3 2.22 1.3 4v1.6h2.32zm-10-2.1v2.1h5.12v-2.1c0-.84-.23-1.47-.7-1.9-.47-.46-1.1-.7-1.86-.7-.8 0-1.42.24-1.86.7-.47.43-.7 1.06-.7 1.9z"></path></svg><input type="password" class="dc-input dc-text-input dl-input-with-icon" name="password" id="password" placeholder="Mot de passe" required="" autocomplete="current-password" value="">
                                                                                    <svg class="dl-input-visibility-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"></path><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg></span></div></div></div></div></div><div class="dl-margin-t"><div class="dl-display-flex dl-justify-between"><label class="dl-checkbox-label"><input type="checkbox" class="dl-checkbox-control" name="remember_username" checked=""><div class="dl-checkbox"><svg class="dl-icon dl-checkbox-icon dl-icon-small" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.947 12.585l-4.16-4.16a.64.64 0 010-.905l.906-.905a.64.64 0 01.905 0L6.4 9.417l6.002-6.002a.64.64 0 01.905 0l.906.905a.64.64 0 010 .905l-7.36 7.36a.64.64 0 01-.906 0z"></path></svg></div><span class="dl-checkbox-label-text">Se souvenir de mon identifiant</span></label></div></div></div><button class="Tappable-inactive dl-button-primary dl-toggleable-form-button dl-button dl-button-block dl-button-size-normal" role="button" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none; cursor: pointer;"><span class="dl-button-label">Se connecter</span></button><div class="txt-center"><a class="Tappable-inactive dl-button-default-real-link dl-margin-y dl-button dl-button-size-normal" role="button" href="/account/passwords/new" type="button" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none; cursor: pointer;"><span class="dl-button-label">Mot de passe oublié ?</span></a></div><div class="dl-alert dl-login-form-sessions-explanation dl-alert-info"><div class="dl-alert-content"><svg class="dl-icon dl-margin-r-s dl-icon-small" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.4A6.4 6.4 0 108 1.6a6.4 6.4 0 000 12.8zm0-7.793a1.084 1.084 0 110-2.168 1.084 1.084 0 010 2.168zm1.135 4.696h-2.27a.31.31 0 01-.31-.31v-.619a.31.31 0 01.31-.31h.31v-1.65h-.31a.31.31 0 01-.31-.31v-.619a.31.31 0 01.31-.31h1.651a.31.31 0 01.31.31v2.58h.31a.31.31 0 01.31.31v.62a.31.31 0 01-.31.31z"></path></svg><span class="dl-text dl-text-body dl-text-regular dl-text-s">Afin de protéger vos données, vous devrez vous reconnecter après une longue période d'inactivité.</span></div></div></form></div></div></div></div>
 */



         );
    }
}
 
export default Login;